output "cluster_name" {
  description = "EKS cluster name."
  value       = aws_eks_cluster.this.name
}

output "cluster_endpoint" {
  description = "Public EKS API endpoint."
  value       = aws_eks_cluster.this.endpoint
}

output "ecr_repository_url" {
  description = "Container registry URL for the sample API."
  value       = aws_ecr_repository.app.repository_url
}

output "platform_api_host" {
  description = "Public hostname intended for the platform showcase API."
  value       = var.platform_api_host
}

output "route53_zone_id" {
  description = "Public Route53 hosted zone ID used for DNS automation."
  value       = try(data.aws_route53_zone.public[0].zone_id, null)
}

output "acm_certificate_arn" {
  description = "ACM certificate ARN for HTTPS termination."
  value       = try(aws_acm_certificate_validation.platform_api[0].certificate_arn, null)
}

output "application_config_parameter" {
  description = "SSM parameter path that stores application settings."
  value       = aws_ssm_parameter.app_config.name
}

output "kubectl_config_command" {
  description = "Command to refresh local kubeconfig once the cluster exists."
  value       = "aws eks update-kubeconfig --region ${var.aws_region} --name ${aws_eks_cluster.this.name}"
}
