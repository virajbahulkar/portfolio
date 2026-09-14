variable "aws_region" {
  description = "AWS region for the platform showcase."
  type        = string
  default     = "ap-south-1"
}

variable "environment" {
  description = "Environment name used for resource naming."
  type        = string
  default     = "dev"
}

variable "project" {
  description = "Project slug used for AWS resource naming."
  type        = string
  default     = "platform-showcase"
}

variable "vpc_cidr" {
  description = "CIDR range assigned to the VPC."
  type        = string
  default     = "10.42.0.0/16"
}

variable "cluster_version" {
  description = "Kubernetes version for the EKS cluster."
  type        = string
  default     = "1.30"
}

variable "node_instance_types" {
  description = "Worker node instance types."
  type        = list(string)
  default     = ["t3.medium"]
}

variable "allowed_cidrs" {
  description = "CIDRs allowed to reach the public Kubernetes API endpoint."
  type        = list(string)
  default     = ["0.0.0.0/0"]
}
