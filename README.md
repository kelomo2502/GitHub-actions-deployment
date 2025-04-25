# 🚀 GitHub Actions CI/CD Workflow Project

This project demonstrates a fully functional CI/CD pipeline using **GitHub Actions**. The workflow is configured in a `main.yml` file located at `.github/workflows/`, fulfilling all the core requirements outlined in the assignment objectives.

---

## 📁 Project Structure

.github/ └── workflows/ └── main.yml

---

## ✅ Objectives Implemented

### 1. **GitHub Actions Workflow (`main.yml`)**
- A complete YAML configuration for automating CI/CD tasks.
- Located in `.github/workflows/main.yml`.

### 2. **Build and Test Jobs**
- **Build job** compiles the application and checks for errors.
- **Test job** runs unit tests and reports success/failure.

### 3. **Environment Variables & Secrets**
- Used both `env:` and `secrets:` to securely pass values across jobs.
- Secrets are configured through GitHub repository settings.

### 4. **Conditional Execution**
- Jobs and steps include conditional logic using `if:` expressions.
- Example: deploy job only runs if build and test succeed.

### 5. **Build Matrix for Parallel Execution**
- Demonstrates a matrix strategy to run tests across multiple Node.js versions (`14`, `16`, `18`).

---

## ⚙️ How It Works

1. **Triggers**: Workflow runs on every `push` and `pull_request` to the `main` branch.
2. **Build Job**:
   - Installs dependencies.
   - Lints and builds the application.
3. **Test Job**:
   - Runs Jest or equivalent test suite.
   - Executes in parallel for multiple Node.js versions using a matrix.
4. **Deploy Job** (optional):
   - Executes only if all previous jobs pass.
   - Requires GitHub Secrets (e.g., `PRODUCTION_TOKEN`).

---

## 🧪 Example Commands in Workflow

```yaml
runs-on: ubuntu-latest

strategy:
  matrix:
    node-version: [14, 16, 18]

steps:
  - uses: actions/checkout@v3
  - name: Use Node.js ${{ matrix.node-version }}
    uses: actions/setup-node@v3
    with:
      node-version: ${{ matrix.node-version }}
  - run: npm install
  - run: npm test
📌 Requirements Fulfilled
 Functional .yml file in the correct directory

 Build and test jobs

 Use of env: and secrets:

 Conditional job execution with if:

 Build matrix strategy for parallel jobs

📎 Notes
Make sure to define any required secrets in your GitHub repository's Settings > Secrets and variables > Actions.

The main.yml file is well-commented for clarity and educational value.

🧾 License
This project is for educational purposes and follows the assignment guidelines as provided.

yaml
Copy
Edit

---

Let me know if you want me to generate or help you fix the actual `main.yml` file so everything aligns
