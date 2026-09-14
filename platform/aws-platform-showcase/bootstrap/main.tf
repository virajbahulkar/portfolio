locals {
  name = "${var.project}-${var.environment}"
}

data "aws_iam_policy_document" "github_oidc_assume_role" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values = [
        for environment in var.github_environments :
        "repo:${var.github_owner}/${var.github_repo}:environment:${environment}"
      ]
    }
  }
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "${local.name}-tf-state"
}

resource "aws_s3_bucket_versioning" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_dynamodb_table" "terraform_lock" {
  name         = "${local.name}-tf-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}

resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

resource "aws_iam_role" "github_actions_deploy" {
  name               = "${local.name}-github-actions-deploy"
  assume_role_policy = data.aws_iam_policy_document.github_oidc_assume_role.json
}

resource "aws_iam_role_policy" "github_actions_deploy" {
  name = "${local.name}-deploy-policy"
  role = aws_iam_role.github_actions_deploy.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "acm:*",
          "autoscaling:*",
          "cloudwatch:*",
          "ec2:*",
          "ecr:*",
          "eks:*",
          "elasticloadbalancing:*",
          "iam:*",
          "logs:*",
          "route53:*",
          "ssm:*"
        ]
        Resource = "*"
      }
    ]
  })
}
