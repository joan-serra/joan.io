resource "aws_s3_bucket" "joan_io" {
    bucket = "joan.io"
    acl = "public-read"

    tags = {
        Name = "joan.io website"
        Environment = "production"
    }

    website {
        index_document = "index.html"
        error_document = "error.html"
    }
}

resource "aws_s3_bucket" "infrastructure" {
    bucket = "joan.io-infrastructure"
    acl = "private"

    tags = {
        Name = "joan.io terraform state"
        Environment = "production"
    }
}