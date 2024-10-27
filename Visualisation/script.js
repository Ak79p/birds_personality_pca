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

// Load CSV data and show the first plot by default
document.addEventListener("DOMContentLoaded", () => {
    d3.csv("Data/pca_df.csv").then(data => {
        window.pcaData = data; // Store data globally for reuse
        showPlot('plot1');
    });
});

// Helper function to create plot data
function createPlotData(x, y, z, colors, text) {
    return {
        x: x,
        y: y,
        z: z,
        type: 'scatter3d',
        mode: 'markers',
        marker: { size: 5, color: colors, opacity: 0.8 },
        text: text
    };
}

// Helper function to create layout
function createLayout(title) {
    return {
        title: { 
            text: title,
            font: { color: '#ffffff', size: 18 } 
        },
        paper_bgcolor: '#000000',
        plot_bgcolor: '#000000',
        scene: {
            xaxis: createAxisConfig('PC1'),
            yaxis: createAxisConfig('PC2'),
            zaxis: createAxisConfig('PC3')
        },
        autosize: true,
        margin: { l: 0, r: 0, b: 0, t: 40 }
    };
}

// Helper function to create axis configuration
function createAxisConfig(title) {
    return {
        backgroundcolor: '#000000',
        gridcolor: showGrid ? '#444444' : 'transparent',
        tickcolor: showGrid ? '#ffffff' : 'transparent',
        showgrid: showGrid,
        zeroline: showGrid,
        title: showGrid ? { text: title, font: { color: '#ffffff' } } : { text: '', font: { color: 'transparent' } },
        tickfont: { color: showGrid ? '#ffffff' : 'transparent' }
    };
}

// Function to show the selected plot
function showPlot(plotId) {
    const plots = document.querySelectorAll('.plot');
    plots.forEach(plot => plot.style.display = 'none');
    document.getElementById(plotId).style.display = 'block';

    if (!window.pcaData) return;

    const xData = window.pcaData.map(d => +d.PC1);
    const yData = window.pcaData.map(d => +d.PC2);
    const zData = window.pcaData.map(d => +d.PC3);
    const personalities = window.pcaData.map(d => d.Personality);

    let colors;
    if (plotId === 'plot1') { // PCA Cluster Plot
        colors = window.pcaData.map(d => {
            return d.Cluster === "0" ? "red" : d.Cluster === "1" ? "blue" : "green";
        });
        const plotData = createPlotData(xData, yData, zData, colors, personalities);
        const layout = createLayout('PCA Cluster Plot');
        Plotly.newPlot(plotId, [plotData], layout, { responsive: true });
    } else if (plotId === 'plot2') { // PCA Personality Plot
        colors = window.pcaData.map(d => {
            if (d.Personality === "Angry Bird") return "red";
            if (d.Personality === "A Pretty Chill Bird") return "blue";
            if (d.Personality === "Standard Bird") return "green";
            return "gray"; // Default color for unknown personalities
        });
        const plotData = createPlotData(xData, yData, zData, colors, personalities);
        const layout = createLayout('PCA Personality Plot');
        Plotly.newPlot(plotId, [plotData], layout, { responsive: true });
    }
}
