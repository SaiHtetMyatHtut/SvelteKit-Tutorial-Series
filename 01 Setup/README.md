# Node.js Installation Guide

## Windows Installation:

### Step 1: Download Node.js Installer

Visit the official Node.js website [https://nodejs.org/en/download/]. Download the Windows Installer (.msi), selecting the appropriate version for your system (32-bit or 64-bit).

### Step 2: Run the Installer

Open the downloaded file to start the setup process. A Node.js Setup Wizard will appear. Click "Next" to proceed.

### Step 3: Accept the License Agreement

Read the license agreement, select the checkbox to accept it, and then click "Next".

### Step 4: Select the Installation Folder

You'll be prompted to choose the destination where Node.js should be installed. If you're unsure, simply accept the default location and click "Next".

### Step 5: Choose Components to Install

The setup wizard will now ask you to select components to include in the installation. The necessary components are pre-selected for you, including "Node.js runtime", "npm package manager", and "Online documentation shortcuts". Additionally, the wizard offers the option to install necessary tools for native modules and automatically install Chocolatey. If you're unsure, keep the default selections and click "Next".

### Step 6: Installation

Click the "Install" button to start the installation process. You may be asked to provide administrative permissions.

### Step 7: Finish Installation

Once the installation is complete, click "Finish" to close the setup wizard.

## Verify Installation:

Open a new command prompt (Windows) or terminal (macOS/Linux) window and run the following commands:

```shell
node -v
npm -v