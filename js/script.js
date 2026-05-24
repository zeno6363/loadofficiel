// Background Slideshow
const slides = document.querySelectorAll('.bg-slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change background every 5 seconds
setInterval(nextSlide, 5000);

// Garry's Mod Loading Screen Callbacks
let filesTotal = 0;
let filesNeeded = 0;

// Called when downloading a file
function DownloadingFile(fileName) {
    document.getElementById('loading-status').innerText = 'Téléchargement: ' + fileName;
}

// Called when the status changes
function SetStatusChanged(status) {
    document.getElementById('loading-status').innerText = status;
}

// Called when the number of files to download is known
function SetFilesTotal(total) {
    filesTotal = total;
}

// Called when the number of files needed to download is known
function SetFilesNeeded(needed) {
    filesNeeded = needed;
    updateProgress();
}

// Update the progress bar based on files needed vs files total
function updateProgress() {
    if (filesTotal > 0) {
        let filesDownloaded = filesTotal - filesNeeded;
        let percentage = (filesDownloaded / filesTotal) * 100;
        
        // Ensure it doesn't go backwards or above 100
        percentage = Math.max(0, Math.min(100, Math.round(percentage)));
        
        document.getElementById('progress-bar').style.width = percentage + '%';
        document.getElementById('loading-percentage').innerText = percentage + '%';
    }
}

// Called by Gmod to provide server info
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    if (servername && document.getElementById('server-name')) {
        let el = document.getElementById('server-name');
        el.innerText = servername;
        el.setAttribute('data-text', servername); // For the glitch effect
    }
}


