echo "Fetching all remote branches..."
git fetch --all

echo "Updating all submodules recursively..."
git submodule update --init --recursive --remote

echo "All submodules are up to date."
echo "Staging changes to the main repository..."
git add .

echo "Committing changes to the main repository..."
git commit -m "Chore: Update submodules for deployment"

echo "Pushing changes to the remote repository..."
git push origin main

echo "Deployment script completed successfully."