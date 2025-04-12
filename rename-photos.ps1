# PowerShell script to rename photos in venue-hire/weddings folders

# Function to rename files in a directory
function Rename-FilesInDirectory {
    param (
        [string]$directoryPath,
        [string]$prefix,
        [int]$startNumber
    )
    
    # Get all image files in the directory
    $files = Get-ChildItem -Path $directoryPath -Filter "*.webp" | Sort-Object Name
    
    # Counter for renaming
    $counter = $startNumber
    
    # Rename each file
    foreach ($file in $files) {
        $newName = "$prefix$counter.webp"
        $newPath = Join-Path $directoryPath $newName
        
        # Rename the file
        Rename-Item -Path $file.FullName -NewName $newName -Force
        
        Write-Host "Renamed: $($file.Name) -> $newName"
        $counter++
    }
    
    Write-Host "`nRenamed $($files.Count) files in $directoryPath"
}

# Main script
$basePath = "C:\Users\Wes\Websites\Fairy\website-next\public\images\venue-hire\weddings"

# Rename files in thumbnails directory
$thumbnailsPath = Join-Path $basePath "thumbnails"
Write-Host "`nProcessing thumbnails directory..."
Rename-FilesInDirectory -directoryPath $thumbnailsPath -prefix "wedding" -startNumber 1

# Rename files in full directory
$fullPath = Join-Path $basePath "full"
Write-Host "`nProcessing full-size images directory..."
Rename-FilesInDirectory -directoryPath $fullPath -prefix "wedding" -startNumber 1

Write-Host "`nAll files have been renamed successfully!" 