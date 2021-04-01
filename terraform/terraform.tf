terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 3.33"
        }
    }

    backend "s3" {
        bucket = "joan.io-infrastructure"
        key = "terraform/production"
        region = "us-east-1"
    }
}

variable "aws_region" {
    default = "us-east-1"
}

provider "aws" {
    region = var.aws_region
}
