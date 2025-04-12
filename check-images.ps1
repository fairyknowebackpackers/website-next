# Define the base path for images
$basePath = "public/images"

# Define the accommodation types and their expected images
$accommodationTypes = @{
    "mixed-dorm" = @{
        "thumbnails" = @("dorm1.webp", "dorm2.webp", "dorm3.webp", "dorm4.webp", "dorm5.webp", "dorm6.webp", "dorm7.webp", "dorm8.webp")
        "full" = @("dorm1.webp", "dorm2.webp", "dorm3.webp", "dorm4.webp", "dorm5.webp", "dorm6.webp", "dorm7.webp", "dorm8.webp")
    }
    "camping" = @{
        "thumbnails" = @("camping1.webp", "camping2.webp", "camping3.webp", "camping4.webp", "camping5.webp", "camping6.webp", "camping7.webp", "camping8.webp")
        "full" = @("camping1.webp", "camping2.webp", "camping3.webp", "camping4.webp", "camping5.webp", "camping6.webp", "camping7.webp", "camping8.webp")
    }
    "safari-tent" = @{
        "thumbnails" = @("safaritent1.webp", "safaritent2.webp", "safaritent3.webp", "safaritent4.webp", "safaritent5.webp", "safaritent6.webp", "safaritent7.webp", "safaritent8.webp")
        "full" = @("safaritent1.webp", "safaritent2.webp", "safaritent3.webp", "safaritent4.webp", "safaritent5.webp", "safaritent6.webp", "safaritent7.webp", "safaritent8.webp")
    }
    "family-en-suite-rondawel" = @{
        "thumbnails" = @("rondawel1.webp", "rondawel2.webp", "rondawel3.webp", "rondawel4.webp", "rondawel5.webp", "rondawel6.webp", "rondawel7.webp", "rondawel8.webp")
        "full" = @("rondawel1.webp", "rondawel2.webp", "rondawel3.webp", "rondawel4.webp", "rondawel5.webp", "rondawel6.webp", "rondawel7.webp", "rondawel8.webp")
    }
}

# Function to check if a file exists
function Test-ImageFile {
    param (
        [string]$path
    )
    return Test-Path $path
}

# Function to check directory structure
function Test-DirectoryStructure {
    param (
        [string]$type
    )
    $thumbnailsPath = Join-Path $basePath "accommodation/$type/thumbnails"
    $fullPath = Join-Path $basePath "accommodation/$type/full"
    
    $thumbnailsExists = Test-Path $thumbnailsPath
    $fullExists = Test-Path $fullPath
    
    return @{
        "thumbnails" = $thumbnailsExists
        "full" = $fullExists
    }
}

# Main script execution
Write-Host "Checking image directories and files..." -ForegroundColor Green

foreach ($type in $accommodationTypes.Keys) {
    Write-Host "`nChecking $type..." -ForegroundColor Yellow
    
    # Check directory structure
    $dirs = Test-DirectoryStructure $type
    if (-not $dirs.thumbnails) {
        Write-Host "Missing thumbnails directory for $type" -ForegroundColor Red
    }
    if (-not $dirs.full) {
        Write-Host "Missing full directory for $type" -ForegroundColor Red
    }
    
    # Check thumbnail images
    Write-Host "Checking thumbnails..." -ForegroundColor Cyan
    foreach ($image in $accommodationTypes[$type].thumbnails) {
        $path = Join-Path $basePath "accommodation/$type/thumbnails/$image"
        if (-not (Test-ImageFile $path)) {
            Write-Host "Missing thumbnail: $image" -ForegroundColor Red
        }
    }
    
    # Check full-size images
    Write-Host "Checking full-size images..." -ForegroundColor Cyan
    foreach ($image in $accommodationTypes[$type].full) {
        $path = Join-Path $basePath "accommodation/$type/full/$image"
        if (-not (Test-ImageFile $path)) {
            Write-Host "Missing full-size image: $image" -ForegroundColor Red
        }
    }
}

Write-Host "`nImage check complete!" -ForegroundColor Green 