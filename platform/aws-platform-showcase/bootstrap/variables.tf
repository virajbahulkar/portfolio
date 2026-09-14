variable "aws_region" {
  description = "AWS region used for the bootstrap resources."
  type        = string
  default     = "ap-south-1"
}

variable "environment" {
  description = "Environment name for bootstrap naming."
  type        = string
  default     = "shared"
}

variable "project" {
  description = "Project name for the bootstrap resources."
  type        = string
  default     = "platform-showcase"
}

variable "github_owner" {
  description = "GitHub owner allowed to assume the deployment role."
  type        = string
  default     = "virajbahulkar"
}

variable "github_repo" {
  description = "GitHub repository allowed to assume the deployment role."
  type        = string
  default     = "portfolio"
}

variable "github_environments" {
  description = "GitHub environments allowed to assume the deployment role."
  type        = list(string)
  default     = ["dev", "prod"]
}

variable "route53_zone_name" {
  description = "Public Route53 zone name used by the platform API host."
  type        = string
  default     = "virajbahulkar.me"
}
