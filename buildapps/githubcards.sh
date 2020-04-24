set -eu

echo "Starting githubcards application"
cd github-cards # githubcards build
npm i

CI=false npm run build
cp -r build/ github-cards
mv github-cards ../build/

echo "finish githubcards application"
