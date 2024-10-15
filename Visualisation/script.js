function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.left === '0px') {
        menu.style.left = '-250px'; // Close the menu
    } else {
        menu.style.left = '0px'; // Open the menu
    }
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
                gridcolor: '#444444',
                tickcolor: '#ffffff',
                title: { text: 'X Axis', font: { color: '#ffffff' } },
                tickfont: { color: '#ffffff' }
            },
            yaxis: {
                backgroundcolor: '#000000',
                gridcolor: '#444444',
                tickcolor: '#ffffff',
                title: { text: 'Y Axis', font: { color: '#ffffff' } },
                tickfont: { color: '#ffffff' }
            },
            zaxis: {
                backgroundcolor: '#000000',
                gridcolor: '#444444',
                tickcolor: '#ffffff',
                title: { text: 'Z Axis', font: { color: '#ffffff' } },
                tickfont: { color: '#ffffff' }
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
