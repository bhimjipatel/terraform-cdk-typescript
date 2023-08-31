# TERRAFORM CDK-TYPESCRIPT

CDKTF TypeScript.

![terraform platform](./docs/terraform-platform.png)

CDKTF includes two packages:

- [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
- [cdktf](./packages/cdktf) - A library for defining Terraform resources using programming constructs.

## Get Started

Choose a language:

- [TypeScript](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Atypescript)

> **Hands-on:** Try the tutorials in the [CDK for Terraform](https://learn.hashicorp.com/collections/terraform/cdktf) collection on HashiCorp Learn.

## Documentation

Refer to the [CDKTF documentation](https://developer.hashicorp.com/terraform/cdktf) for more detail about how to build and manage CDKTF applications, including:

- [Application Architecture](https://developer.hashicorp.com/terraform/cdktf/concepts/cdktf-architecture): Learn the tools and processes that CDKTF uses to leverage the Terraform ecosystem and convert code into Terraform configuration files. It also explains the major components of a CDKTF application and how those pieces fit together.

- [Project Setup](https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/project-setup): Learn how to create a new CDKTF project from a pre-built or custom template. Also learn how to convert an existing HCL project into a CDKTF application.

- [Unit Tests](https://developer.hashicorp.com/terraform/cdktf/test/unit-tests): Learn how to test your application in Typescript with jest.

- [Examples](https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/examples): Reference example projects in every supported language and review explanatory videos and other resources.

## Community

The development team would love your feedback to help guide the project.

- Contribute using the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.
- Ask a question on the HashiCorp [Discuss](https://discuss.hashicorp.com/) using the [terraform-cdk](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/) category.
- Report a [bug](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=bug&template=bug-report.md&title=) or request a new [feature](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
- Browse all [open issues](https://github.com/hashicorp/terraform-cdk/issues).

## Build

About prerequisites, refer the [followings](./CONTRIBUTING.md#prerequisites).

Clone the project repository.

```bash
git clone https://github.com/hashicorp/terraform-cdk.git
```

Download dependencies.

```bash
cd terraform-cdk/
yarn install
```

Build the project and packages.

```bash
yarn build
```
