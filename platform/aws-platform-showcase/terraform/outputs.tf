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

output "application_config_parameter" {
  description = "SSM parameter path that stores application settings."
  value       = aws_ssm_parameter.app_config.name
}

output "kubectl_config_command" {
  description = "Command to refresh local kubeconfig once the cluster exists."
  value       = "aws eks update-kubeconfig --region ${var.aws_region} --name ${aws_eks_cluster.this.name}"
}
