
# ExosphereX A.I. — AWS Website Hosting & CI/CD

A frontend website deployed on AWS with an automated CI/CD pipeline using GitHub Actions.

This project demonstrates cloud hosting, content delivery, DNS configuration, HTTPS, version control, automated builds, deployment automation, and cloud troubleshooting.

---

## 🌐 Live Website

- **Website:** https://exospherexai.com
- **WWW:** https://www.exospherexai.com

---

## 📌 Project Overview

The ExosphereX A.I. website is a frontend web application deployed using AWS cloud services.

The website is hosted on Amazon S3 and delivered globally using Amazon CloudFront. Amazon Route 53 manages the custom domain DNS configuration, while AWS Certificate Manager provides the SSL/TLS certificate for secure HTTPS communication.

A CI/CD pipeline was implemented using GitHub Actions to automate the deployment process.

Whenever code is pushed to the `main` branch, GitHub Actions automatically:

1. Checks out the source code.
2. Sets up Node.js.
3. Installs project dependencies.
4. Builds the production application.
5. Configures AWS credentials.
6. Uploads the production build to Amazon S3.
7. Invalidates the CloudFront cache.

---

## 🏗️ Architecture

```text
Developer
    |
    | Code changes
    v
Git / GitHub Repository
    |
    | Push to main branch
    v
GitHub Actions CI/CD
    |
    |-- Checkout Repository
    |-- Setup Node.js
    |-- Install Dependencies
    |-- Build Application
    |-- Configure AWS Credentials
    |
    v
Production Build (dist/)
    |
    v
Amazon S3
    |
    v
Amazon CloudFront
    |
    v
End Users
```

### AWS Services Used

| AWS Service | Purpose |
|---|---|
| Amazon S3 | Stores the production website files |
| Amazon CloudFront | CDN for caching and global content delivery |
| Amazon Route 53 | DNS management for the custom domain |
| AWS Certificate Manager (ACM) | SSL/TLS certificate for HTTPS |

---

## 🛠️ Technologies Used

### Development

- React
- TypeScript
- Vite
- Tailwind CSS
- Node.js
- npm

### Version Control

- Git
- GitHub

### CI/CD

- GitHub Actions

### Cloud Infrastructure

- Amazon S3
- Amazon CloudFront
- Amazon Route 53
- AWS Certificate Manager
- AWS CLI

### Development Environment

- Visual Studio Code

---

## 📂 Project Structure

```text
exospherex-ai-launchpad/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── integrations/
│   └── ...
│
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ CI/CD Pipeline

The deployment workflow is configured in:

```text
.github/workflows/deploy.yml
```

The workflow is triggered when code is pushed to the `main` branch.

### Pipeline Stages

#### 1. Checkout Repository

GitHub Actions retrieves the source code from the GitHub repository.

#### 2. Setup Node.js

The workflow configures Node.js 20 in the GitHub-hosted runner.

#### 3. Install Dependencies

```bash
npm install
```

Installs the dependencies required by the application.

#### 4. Build Application

```bash
npm run build
```

Builds the production version of the application.

The generated production files are stored in:

```text
dist/
```

#### 5. Configure AWS Credentials

AWS credentials are securely stored in GitHub Repository Secrets and used by the workflow to authenticate with AWS.

#### 6. Deploy to Amazon S3

The production build is uploaded to the S3 bucket.

```bash
aws s3 sync dist/ s3://exospherexai-frontend
```

#### 7. CloudFront Cache Invalidation

After uploading the updated files, CloudFront cache is invalidated so users can receive the latest website version.

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

---

## 🚀 Deployment Workflow

```text
1. Developer modifies website code
              |
              v
2. Changes are committed using Git
              |
              v
3. Code is pushed to GitHub main
              |
              v
4. GitHub Actions workflow starts
              |
              v
5. Dependencies are installed
              |
              v
6. Application is built
              |
              v
7. Production files are generated
              |
              v
8. Files are uploaded to Amazon S3
              |
              v
9. CloudFront cache is invalidated
              |
              v
10. Updated website becomes live
```

---

## 💻 Local Development

### Prerequisites

Install the following tools:

- Node.js
- npm
- Git
- Visual Studio Code

### Clone the Repository

```bash
git clone https://github.com/veant8237/exospherex-ai-launchpad.git
```

Navigate into the project directory:

```bash
cd exospherex-ai-launchpad
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### Build for Production

```bash
npm run build
```

The production files will be generated inside the `dist/` directory.

---

## 🔐 Security Practices

- AWS credentials are stored securely in GitHub Secrets.
- Credentials are not hardcoded into the source code.
- Sensitive credentials should never be committed to GitHub.
- HTTPS is enabled using AWS Certificate Manager.
- GitHub Actions is used to automate deployment.

---

## 🧰 Troubleshooting

### GitHub Actions Dependency Installation Failure

During implementation, the GitHub Actions workflow initially failed during dependency installation because of inconsistencies in the dependency lock file.

#### Investigation

The issue was identified by reviewing the GitHub Actions workflow logs.

#### Resolution

1. Ran `npm install` locally.
2. Updated the dependency lock file.
3. Checked the changes using Git.
4. Committed the updated `package-lock.json`.
5. Pushed the changes to GitHub.
6. Verified that the GitHub Actions workflow completed successfully.

---

## 📈 Key Learning Outcomes

Through this project, I gained practical experience with:

- AWS cloud infrastructure
- Static website hosting
- Amazon S3
- Amazon CloudFront
- DNS management using Route 53
- HTTPS and SSL/TLS certificates
- Git and GitHub
- GitHub Actions
- CI/CD pipeline implementation
- Automated deployment
- AWS CLI
- Dependency management
- Deployment troubleshooting
- Cloud cache invalidation

---

## 👨‍💻 Author

**Vedant Bhosale**

Project: ExosphereX A.I. Website Deployment

GitHub: [veant8237](https://github.com/veant8237)

---

## 📄 License

This project is intended for learning, portfolio demonstration, and website deployment practice.
