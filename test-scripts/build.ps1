$ErrorActionPreference = "Stop"

Write-Host "Installing dependencies..." -ForegroundColor Cyan
Set-Location "D:\SAMIUDDIN\kilo legend\legend-kilo"

# Try bun install
try {
    bun install 2>&1 | Write-Host
    if ($LASTEXITCODE -ne 0) { throw "bun install failed" }
    Write-Host "Dependencies installed successfully!" -ForegroundColor Green
} catch {
    Write-Host "bun install failed, trying npm..." -ForegroundColor Yellow
    npm install 2>&1 | Write-Host
}

Write-Host "`nBuilding project..." -ForegroundColor Cyan
bun run build 2>&1 | Write-Host
if ($LASTEXITCODE -ne 0) { 
    Write-Host "Build failed!" -ForegroundColor Red 
    exit 1 
}

Write-Host "Build completed successfully!" -ForegroundColor Green
Write-Host "`nBuild output is in: dist/" -ForegroundColor Cyan