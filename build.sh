

cat << 'EOF' > build.sh
#!/bin/bash
npm install -g vite@latest
vite build
