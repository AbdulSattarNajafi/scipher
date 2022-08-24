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

const toggleScoreDropdown = () => {
    const dropdownContent = document.getElementById('score-dropdown');
    dropdownContent.classList.toggle('show');
};

const toggleTurnDropdown = () => {
    const dropdownContent = document.getElementById('turn-dropdown');
    dropdownContent.classList.toggle('show');
};

const toggleChangeName = () => {
    const modal = document.getElementById('change-team-name');
    modal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
}

const toggleTimeSettings = () => {
    const modal = document.getElementById('time-settings');
    modal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
}

const toggleRoomSettings = () => {
    const modal = document.getElementById('room-settings');
    modal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
}

const toggleResetGame = () => {
    const modal = document.getElementById('reset-game-modal');
    modal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
}

const toggleRoomLobby = () => {
    const modal = document.getElementById('room-lobby');
    modal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
}

const firstTeamTimer = () => {
    const timerContainer = document.getElementById('timer-team-1');
    const valueContainer = document.getElementById('timer-value-team-1');
    const endBtn = document.querySelector('.end-btn-team-1');

    if(!timerContainer || !valueContainer || !endBtn) return;

    let progressValue = 0;
    let progressEndValue = 60;
    let value = 60;
    const speed = 1000;
    const degreeValue = 6;

    // timerContainer.style.animation = 'animation: progress-1 60s ease-out;'

    const progress = setInterval(() => {
        progressValue++;
        value--;

        valueContainer.textContent = value;
        
        // timerContainer.style.background = `conic-gradient(
        //     #ffffff28 ${progressValue * degreeValue}deg,
        //     #ffffff ${progressValue * degreeValue}deg
        // )`;

        if(progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);

    endBtn.addEventListener('click', () => {
        clearInterval(progress);
    });
};

firstTeamTimer();

const secondTeamTimer = () => {
    const timerContainer = document.getElementById('timer-team-2');
    const valueContainer = document.getElementById('timer-value-team-2');
    const endBtn = document.querySelector('.end-btn-team-2');
    // const turnBtn = document.querySelector('.turn-btn-team-2')
    // turnBtn.classList.add('active');
    if(!timerContainer || !valueContainer || !endBtn) return;

    let progressValue = 0;
    const progressEndValue = 60;
    let value = 60;
    const speed = 1000;
    const degreeValue = 6;

    const progress = setInterval(() => {
        progressValue++;
        value--;

        valueContainer.textContent = value;
        timerContainer.style.background = `conic-gradient(
            #ffffff28 ${progressValue * degreeValue}deg,
            #ffffff ${progressValue * degreeValue}deg
        )`;

        if(progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);

    endBtn.addEventListener('click', () => {
        clearInterval(progress);
        turnBtn.classList.remove('active');
    });
};

secondTeamTimer();

(function tabooPlayerTimer() {
    const valueContainer = document.getElementById('player-timer-value');
    const bg = document.querySelector('.taboo-player-bg');

    if(!valueContainer || !bg) return;
    

    let progressValue = 0;
    const progressEndValue = 60;
    let value = 60;
    const speed = 1000;
    const degreeValue = 6;

    const progress = setInterval(() => {
        progressValue++;
        value--;

        valueContainer.textContent = value;
        bg.style.background = `conic-gradient(
            #4B4E61 ${progressValue * degreeValue}deg,
            transparent ${progressValue * degreeValue}deg
        )`;

        if(progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
})();

function tabooStartTimer() {
    const valueContainer = document.getElementById('taboo-start-value');
    const bg = document.querySelector('.taboo-start-bg');
    

    let progressValue = 0;
    const progressEndValue = 60;
    let value = 60;
    const speed = 1000;
    const degreeValue = 6;

    const progress = setInterval(() => {
        progressValue++;
        value--;

        valueContainer.textContent = value;
        bg.style.background = `conic-gradient(
            #4B4E61 ${progressValue * degreeValue}deg,
            transparent ${progressValue * degreeValue}deg
        )`;

        if(progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
};

// Chat tabs
(function chatTabs() {
    const tabBtns = document.querySelectorAll('.chat__tabs-btn');
    const tabContents = document.querySelectorAll('.chat__tab-content');
    if(!tabBtns || !tabContents) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            document.querySelector('.chat__tabs-btn.active').classList.remove('active');
            btn.classList.add('active');

            tabContents.forEach(tab => {
                const tabId = tab.dataset.id;
                if(id === tabId) {
                    tab.classList.add('show');
                } else {
                    tab.classList.remove('show');
                }
            })
        })
    })
})();

// Scipher Cards
(function scipherCardsFlip() {
    const trinagle = document.querySelectorAll('.scipher-triangle')
    const cards = document.querySelectorAll('.flip-card');
    if(!cards || !trinagle) return;

    trinagle.forEach((angle, i) => {
        angle.addEventListener('click', (e) => {
            cards.forEach((card, index) => {
                if(i === index) {
                    card.classList.add('flip');
                }
            })
        })
    })

})();

// Scipher Cards
(function scipherCards() {
    const cards = document.querySelectorAll('.replay-card');
    if(!cards) return;

    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            const activeCard = document.querySelector('.scipher-card-active');
            const currentCard  = e.currentTarget;
            if(activeCard) {
                activeCard.classList.remove('scipher-card-active')
            }
            currentCard.classList.add('scipher-card-active');
        })
    })

})();

// Selects
$(document).ready(function() {
    $('#clue-select').select2();

    $('#time-settings-select').select2();
    $('#clock-mode').select2();
    $('#team-time-1').select2();
    $('#team-time-2').select2();
    $('#room-grid-size').select2();
    $('#cards-per-team').select2();
    $('#black-cards').select2();

    // User settings selects
    $('#win-rate').select2();
    $('#detailed-statistics').select2();
    $('#trophy-number').select2();
    $('#allowing-friends').select2();
});

// Display Game log and Chat
const chatLog = () => {
    const logContainer = document.getElementById('scipher__log');
    const logCard = document.getElementById('log-card');
    const chatCard = document.getElementById('chat-card');

    if(!logContainer || !logCard || !chatCard) {
        return
    }

    logContainer.classList.toggle('active');
    logCard.classList.toggle('active');
    chatCard.classList.toggle('active');
};

// Start Game
const startGame = () => {
    const btnContainer = document.getElementById('boards-start');
    const container = document.getElementById('taboo-content');
    if(!btnContainer || !container) {
        return
    }

    tabooStartTimer();
    btnContainer.className = 'boards__start game-start';
    container.className = 'taboo__content game-start';
};

// Scipher Page
const scipherPage = () => {
    const container = document.getElementById('scipher-boards-clue');
    if(!container) return;

    container.className = 'boards__clue show-clue';
};

// First Turn Chart
const firstTurnChart = function() {

    const userChart = function() {
        if (typeof echarts == 'undefined') return;

        const pieChart = document.getElementById('first-turn-chart');
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
                    text: `FIRST TURN CLUE SIZE ${brakLine} FREQUENCY`,
                    subtext: `Data from all logged in users ${brakLine} from the last 60 days`,
                    left: leftPosition,
                    top: topPosition,
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                        lineHeight: 14,
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

// All Turns Chart
const allTurnsChart = function() {

    const userChart = function() {
        if (typeof echarts == 'undefined') return;

        const pieChart = document.getElementById('all-turns-chart');
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
                    subtext: `Data from all logged in users ${brakLine} from the last 60 days`,
                    left: leftPosition,
                    top: topPosition,
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                        lineHeight: 14,
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

// World Difficulty Chart
const worlDifficultyChart = function() {

    const userChart = function() {
        if (typeof echarts == 'undefined') return;

        const pieChart = document.getElementById('world-difficulty-chart');
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
            
            if(width < 767) {
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
                    '#00BABA','#DB5454','#727586'
                ],
                textStyle: {
                    fontFamily: 'Inter, sans-serif sans-serif',
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                title: {
                    text: `WORLD DIFFICULTY ${brakLine} BREAKDOWN`,
                    subtext: `There were shown 14 words ${brakLine} this round`,
                    left: leftPosition,
                    top: topPosition,
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                        lineHeight: 14,
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
                        padding: [20, 0, 0, 0],
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
                            {value: 35, name: 'New/unsorted words'},{value: 35, name: 'Average'},{value: 30, name: 'Hard'}
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

// Rendering Charts
document.addEventListener('DOMContentLoaded', function() {
    firstTurnChart.init();
    allTurnsChart.init();
    worlDifficultyChart.init();
});