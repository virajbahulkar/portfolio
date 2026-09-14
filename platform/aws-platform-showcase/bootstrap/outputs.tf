output "terraform_state_bucket" {
  description = "S3 bucket name for remote Terraform state."
  value       = aws_s3_bucket.terraform_state.bucket
}

output "terraform_lock_table" {
  description = "DynamoDB table used for Terraform state locking."
  value       = aws_dynamodb_table.terraform_lock.name
}

output "github_actions_role_arn" {
  description = "IAM role ARN for GitHub Actions OIDC deployments."
  value       = aws_iam_role.github_actions_deploy.arn
}

output "route53_zone_name" {
  description = "Public DNS zone name expected by the showcase deployment."
  value       = var.route53_zone_name
}
