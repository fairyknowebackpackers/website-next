# PowerShell script to set up adventure folders and rename images

# Function to create folder structure
function Create-AdventureFolders {
    param (
        [string]$basePath,
        [string[]]$adventures
    )
    
    # Create the main adventures folder if it doesn't exist
    $adventuresPath = Join-Path $basePath "adventures"
    if (-not (Test-Path $adventuresPath)) {
        New-Item -Path $adventuresPath -ItemType Directory
        Write-Host "Created main adventures folder: $adventuresPath"
    }
    
    # Create folders for each adventure
    foreach ($adventure in $adventures) {
        $adventurePath = Join-Path $adventuresPath $adventure
        $thumbnailsPath = Join-Path $adventurePath "thumbnails"
        $fullPath = Join-Path $adventurePath "full"
        
        # Create adventure folder
        if (-not (Test-Path $adventurePath)) {
            New-Item -Path $adventurePath -ItemType Directory
            Write-Host "Created adventure folder: $adventurePath"
        }
        
        # Create thumbnails folder
        if (-not (Test-Path $thumbnailsPath)) {
            New-Item -Path $thumbnailsPath -ItemType Directory
            Write-Host "Created thumbnails folder: $thumbnailsPath"
        }
        
        # Create full folder
        if (-not (Test-Path $fullPath)) {
            New-Item -Path $fullPath -ItemType Directory
            Write-Host "Created full folder: $fullPath"
        }
    }
    
    Write-Host "`nFolder structure created successfully!"
}

# Function to rename files in a directory
function Rename-AdventureFiles {
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
$basePath = "C:\Users\Wes\Websites\Fairy\website-next\public\images"
$adventures = @(
    "map-of-africa",
    "wilderness-beach",
    "water-under-the-bridge",
    "fairy-labyrinth",
    "bridge-jump"
)

# Create the folder structure
Write-Host "Setting up adventure folders..."
Create-AdventureFolders -basePath $basePath -adventures $adventures

# Ask if user wants to rename files in any specific adventure folder
Write-Host "`nWould you like to rename files in any adventure folder? (y/n)"
$renameFiles = Read-Host

if ($renameFiles -eq "y") {
    Write-Host "`nAvailable adventures:"
    for ($i = 0; $i -lt $adventures.Count; $i++) {
        Write-Host "$($i+1). $($adventures[$i])"
    }
    
    Write-Host "`nEnter the number of the adventure (or 'all' for all adventures):"
    $selectedAdventure = Read-Host
    
    if ($selectedAdventure -eq "all") {
        foreach ($adventure in $adventures) {
            $thumbnailsPath = Join-Path $basePath "adventures\$adventure\thumbnails"
            $fullPath = Join-Path $basePath "adventures\$adventure\full"
            
            Write-Host "`nProcessing $adventure thumbnails..."
            Rename-AdventureFiles -directoryPath $thumbnailsPath -prefix "adventure" -startNumber 1
            
            Write-Host "`nProcessing $adventure full-size images..."
            Rename-AdventureFiles -directoryPath $fullPath -prefix "adventure" -startNumber 1
        }
    } else {
        $index = [int]$selectedAdventure - 1
        if ($index -ge 0 -and $index -lt $adventures.Count) {
            $adventure = $adventures[$index]
            $thumbnailsPath = Join-Path $basePath "adventures\$adventure\thumbnails"
            $fullPath = Join-Path $basePath "adventures\$adventure\full"
            
            Write-Host "`nProcessing $adventure thumbnails..."
            Rename-AdventureFiles -directoryPath $thumbnailsPath -prefix "adventure" -startNumber 1
            
            Write-Host "`nProcessing $adventure full-size images..."
            Rename-AdventureFiles -directoryPath $fullPath -prefix "adventure" -startNumber 1
        } else {
            Write-Host "Invalid selection. Exiting."
        }
    }
}

Write-Host "`nSetup complete!" 