let showGrid = true; // Variable to track grid and ticks visibility
let menuOpen = false; // Variable to track menu state

// Toggle side menu
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menuOpen = !menuOpen;
    menu.style.left = menuOpen ? '0px' : '-250px';
}

// Close menu if user clicks outside it
document.addEventListener('click', function(event) {
    const menu = document.getElementById('side-menu');
    if (menuOpen && !menu.contains(event.target) && !event.target.classList.contains('close-btn')) {
        toggleMenu();
    }
});

// Toggle grid and ticks visibility
function toggleGridTicks() {
    showGrid = !showGrid;
    const activePlot = document.querySelector('.plot[style*="display: block"]').id;
    showPlot(activePlot);
}

// Function to load CSV data and show Plot 1 by default
document.addEventListener("DOMContentLoaded", () => {
    d3.csv("Data/pca_df.csv").then(data => {
        window.pcaData = data; // Store data globally for reuse
        showPlot('plot1');
    });
});

function showPlot(plotId) {
    const plots = document.querySelectorAll('.plot');
    plots.forEach(plot => plot.style.display = 'none');
    document.getElementById(plotId).style.display = 'block';

    if (plotId === 'plot1' && window.pcaData) {
        // Only process data for plot1
        const xData = window.pcaData.map(d => +d.PC1);
        const yData = window.pcaData.map(d => +d.PC2);
        const zData = window.pcaData.map(d => +d.PC3);
        const colors = window.pcaData.map(d => {
            return d.Cluster === "0" ? "red" : d.Cluster === "1" ? "blue" : "green";
        });
        const personalities = window.pcaData.map(d => d.Personality);

        const plotData = {
            x: xData,
            y: yData,
            z: zData,
            type: 'scatter3d',
            mode: 'markers',
            marker: { size: 5, color: colors, opacity: 0.8 },
            text: personalities
        };

        const layout = {
            title: { 
                text: 'PCA Cluster Plot', // Updated title
                font: { color: '#ffffff', size: 18 } 
            },
            paper_bgcolor: '#000000',
            plot_bgcolor: '#000000',
            scene: {
                xaxis: {
                    backgroundcolor: '#000000',
                    gridcolor: showGrid ? '#444444' : 'transparent',
                    tickcolor: showGrid ? '#ffffff' : 'transparent',
                    showgrid: showGrid,
                    zeroline: showGrid,
                    title: showGrid ? { text: 'PC1', font: { color: '#ffffff' } } : { text: '', font: { color: 'transparent' } },
                    tickfont: { color: showGrid ? '#ffffff' : 'transparent' }
                },
                yaxis: {
                    backgroundcolor: '#000000',
                    gridcolor: showGrid ? '#444444' : 'transparent',
                    tickcolor: showGrid ? '#ffffff' : 'transparent',
                    showgrid: showGrid,
                    zeroline: showGrid,
                    title: showGrid ? { text: 'PC2', font: { color: '#ffffff' } } : { text: '', font: { color: 'transparent' } },
                    tickfont: { color: showGrid ? '#ffffff' : 'transparent' }
                },
                zaxis: {
                    backgroundcolor: '#000000',
                    gridcolor: showGrid ? '#444444' : 'transparent',
                    tickcolor: showGrid ? '#ffffff' : 'transparent',
                    showgrid: showGrid,
                    zeroline: showGrid,
                    title: showGrid ? { text: 'PC3', font: { color: '#ffffff' } } : { text: '', font: { color: 'transparent' } },
                    tickfont: { color: showGrid ? '#ffffff' : 'transparent' }
                }
            },
            autosize: true,
            margin: { l: 0, r: 0, b: 0, t: 40 }
        };

        Plotly.newPlot(plotId, [plotData], layout, { responsive: true });
    } 
    // For 'plot2' and 'plot3', simply do nothing
}
