let showGrid = true; // Variable to track grid and ticks visibility
let menuOpen = false; // Variable to track menu state

function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menuOpen = !menuOpen; // Toggle menu state
    menu.style.left = menuOpen ? '0px' : '-250px'; // Open or close the menu
}

// Close the menu if the user clicks outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById('side-menu');
    if (menuOpen && !menu.contains(event.target) && !event.target.classList.contains('close-btn')) {
        toggleMenu(); // Close the menu
    }
});

function toggleGridTicks() {
    showGrid = !showGrid; // Toggle the state

    // Get the currently displayed plot ID
    const activePlot = document.querySelector('.plot[style*="display: block"]').id;

    // Show the plot with the updated grid and tick visibility
    showPlot(activePlot);
}

function showPlot(plotId) {
    const plots = document.querySelectorAll('.plot');
    plots.forEach(plot => plot.style.display = 'none');
    document.getElementById(plotId).style.display = 'block';

    // Example plot data (replace with your own data)
    const exampleData = {
        x: [1, 2, 3, 4, 5],
        y: [10, 11, 12, 13, 14],
        z: [5, 6, 7, 8, 9],
        type: 'scatter3d',
        mode: 'markers',
        marker: { size: 5, color: 'rgba(0, 255, 255, 0.8)' }
    };

    // Layout with full width and height
    const layout = {
        title: { 
            text: 'PCA Plot', 
            font: { color: '#ffffff', size: 18 } 
        },
        titlefont: {
            size: 24, // Size of the title font
            color: '#ffffff' // Title font color
        },
        paper_bgcolor: '#000000',
        plot_bgcolor: '#000000',
        scene: {
            xaxis: {
                backgroundcolor: '#000000',
                gridcolor: showGrid ? '#444444' : 'transparent', // Toggle grid visibility
                tickcolor: showGrid ? '#ffffff' : 'transparent', // Hide tick marks if grid is off
                showgrid: showGrid, // Show or hide grid
                zeroline: showGrid, // Show or hide zero line
                title: showGrid ? { text: 'X Axis', font: { color: '#ffffff' } } : { text: '', font: { color: 'transparent' } }, // Hide title if grid is off
                tickfont: { color: showGrid ? '#ffffff' : 'transparent' } // Hide tick labels if grid is off
            },
            yaxis: {
                backgroundcolor: '#000000',
                gridcolor: showGrid ? '#444444' : 'transparent', // Toggle grid visibility
                tickcolor: showGrid ? '#ffffff' : 'transparent', // Hide tick marks if grid is off
                showgrid: showGrid, // Show or hide grid
                zeroline: showGrid, // Show or hide zero line
                title: showGrid ? { text: 'Y Axis', font: { color: '#ffffff' } } : { text: '', font: { color: 'transparent' } }, // Hide title if grid is off
                tickfont: { color: showGrid ? '#ffffff' : 'transparent' } // Hide tick labels if grid is off
            },
            zaxis: {
                backgroundcolor: '#000000',
                gridcolor: showGrid ? '#444444' : 'transparent', // Toggle grid visibility
                tickcolor: showGrid ? '#ffffff' : 'transparent', // Hide tick marks if grid is off
                showgrid: showGrid, // Show or hide grid
                zeroline: showGrid, // Show or hide zero line
                title: showGrid ? { text: 'Z Axis', font: { color: '#ffffff' } } : { text: '', font: { color: 'transparent' } }, // Hide title if grid is off
                tickfont: { color: showGrid ? '#ffffff' : 'transparent' } // Hide tick labels if grid is off
            }
        },
        autosize: true,
        margin: { l: 0, r: 0, b: 0, t: 40 } // Adjust top margin for title
    };

    // Render the plot with layout
    if (plotId === 'plot1') {
        Plotly.newPlot('plot1', [exampleData], layout, { responsive: true });
    } else if (plotId === 'plot2') {
        Plotly.newPlot('plot2', [exampleData], layout, { responsive: true });
    } else if (plotId === 'plot3') {
        Plotly.newPlot('plot3', [exampleData], layout, { responsive: true });
    }
}

// Show plot1 by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showPlot('plot1');
});
