'use strict';

const profileToggle = () => {
    const dropdownContent = document.getElementById('profile-dropdown');
    dropdownContent.classList.toggle('show-dropdwon');
};

const toggleUserSettings = () => {
    const dropdownContent = document.getElementById('profile-dropdown');
    const userSettingsModal = document.getElementById('user-settings');
    userSettingsModal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
    dropdownContent.classList.remove('show-dropdwon');
};

// Counting Select word pack(s) Checkboxes
(function createCustom() {
    const checkboxes = document.querySelectorAll('.create-room-checkbox');
    const nextBtn = document.getElementById('create-custom-btn');

    if(!checkboxes || !nextBtn) return;

    let checked;
    let selectedCount = 0;

    for(let i = 0; i < checkboxes.length; i++) {
        checked = checkboxes[i];
        const type = checked.getAttribute("type");
        if (type === 'checkbox' && checked.checked) {
            selectedCount++;
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            if(checkbox.checked) {
                selectedCount++
            } else {
                selectedCount--;
            }

            nextBtn.addEventListener('click', () => {
                if(selectedCount >= 4) {
                    window.location.href = './create-custom-2.html'
                } else {
                    window.location.href = './scipher.html'
                }
            });

        });
    });

})();

// Rendering them icons into Theme dropdown
function themeState (state) {
    if (!state.id) { return state.text; }
    let $state = $(
      '<span><img src="./assets/images/theme-' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};

// new SlimSelect({
//     select: '#outer-space-theme',
//     placeholder: 'Placeholder Text Here',
//     search: false,

//     data: [
//         {text: 'Human'}, // regular option
//         {
//           options: [
//             {text: 'Cat'},
//             {text: 'Dog'},
//             {text: 'Bird'}
//           ]
//         }
//     ]
// });

// new SlimSelect({
//     select: '#grid-size',
// });

// Selects
$(document).ready(function() {
    $('#grid-size').select2();

    $('#outer-space-theme').select2({
        templateResult: themeState,
        templateSelection: themeState
    });

    $('#theme').select2();

    $('#privacy').select2();

    $('#settings').select2();

    $('#black-cards').select2();

    $('#game-clock').select2();

    $('#team-starting').select2();

    $('#first-team').select2();

    $('#time-action').select2();

    $('#first-run').select2();

    $('#per-team').select2();

    // User settings selects
    $('#win-rate').select2();
    $('#detailed-statistics').select2();
    $('#trophy-number').select2();
    $('#allowing-friends').select2();

    // Create Taboo
    $('#room-privacy').select2();
    $('#total-team').select2();
    $('#game-mode').select2();
    $('#standard-mode-difficulty').select2();
    $('#time-bank').select2();
    $('#words-per-turn').select2();
});

// User Profile Chart
const userProfileChart = function() {

    const userChart = function() {
        if (typeof echarts == 'undefined') return;

        const pieChart = document.getElementById('user_chart');
        let pie_basic;
            
        
        if (pieChart) {
            pie_basic = echarts.init(pieChart);

            let topPosition = 'middle';
            let leftPosition = 'left';
            let brakLine = '\n';
            let legendOrient = 'vertical';
            let legendRight = 'right';
            let legendTop = 'middle';
            let width = window.innerWidth;
            
            if(width < 576) {
                topPosition = 'top';
                leftPosition = 'center';
                brakLine = '';
                legendOrient = 'horizontal';
                legendRight = 'center';
                legendTop = 'bottom';
            }

            // Options
            pie_basic.setOption({
                color: [
                    '#00BABA','#FED03D','#727586','#DA53B4','#DB5454',
                    '#2ABB8F','#8461E8','#A7BB2A','#BB2A8A','#B8B8B8',
                ],
                textStyle: {
                    fontFamily: 'Inter, sans-serif sans-serif',
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                title: {
                    text: `CLUE SIZE FREQUENCY ${brakLine} (ALL TURNS)`,
                    subtext: `Data from the last 60 days ${brakLine} (55 matches)`,
                    left: leftPosition,
                    top: topPosition,
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                        lineHeight: 17,
                        padding: [50, 0, 0, 0],
                    },
                    subtextStyle: {
                        fontSize: 12,
                        color: '#ffffff40',
                        lineHeight: 13,
                        padding: [0, 0, 50, 0],
                    }
                    },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)',
                  },
                legend: {
                    formatter: '{name}',
                    itemWidth: 12,
                    itemHeight: 12,
                    orient: legendOrient,
                    right: legendRight,
                    top: legendTop,
                    offsetY: 20,
                    textStyle: {
                        fontSize: 11,
                        color: 'inherit',
                        lineHeight: 12,
                    },
                },
                series: [
                    {
                      name: 'Clue Size',
                      type: 'pie',
                      radius: ['40%', '70%'],
                      avoidLabelOverlap: false,
                      itemStyle: {
                        borderRadius: 0,
                        borderColor: '#343643',
                        borderWidth: 2,
                      },
                      label: {
                          fontSize: '14',
                          color: 'inherit',
                          fontWeight: 500,
                        },
                      emphasis: {
                        label: {
                          fontSize: '14',
                          color: 'inherit',
                          fontWeight: 500,
                        }
                      },
                      data: [
                          {value: 25, name: '0'},{value: 19, name: '1'},{value: 27, name: '2'},{value: 40, name: '3'},{value: 40, name: '4'},{value: 64, name: '5'},{value: 35, name: '6'},{value: 21, name: '7'},{value: 11, name: '8+'},{value: 6, name: 'INF'}
                      ]
                    }
                  ]
            });
        }

        // Resize function
        const triggerChartResize = function() {
            pieChart && pie_basic.resize();
        };

        // On window resize
        let resizeChart;
        window.addEventListener('resize', function() {
            clearTimeout(resizeChart);
            resizeChart = setTimeout(function () {
                triggerChartResize();
            }, 200);
        });
    };

    return {
        init: function() {
            userChart();
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    userProfileChart.init();
});

