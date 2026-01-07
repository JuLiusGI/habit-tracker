// Toggle habit status between done and not done
function toggleHabit(habitId) {
    const habitRow = document.getElementById(habitId);
    const statusBtn = habitRow.querySelector('.status-btn');
    
    // Toggle the completed class
    habitRow.classList.toggle('completed');
    
    // Update button text based on state
    if (habitRow.classList.contains('completed')) {
        statusBtn.textContent = '✅ Done!';
    } else {
        statusBtn.textContent = 'Not Done';
    }
}

// Optional: Load saved state from localStorage
function loadHabitState() {
    const habits = ['habit-1', 'habit-2', 'habit-3'];
    
    habits.forEach(habitId => {
        const saved = localStorage.getItem(habitId);
        if (saved === 'completed') {
            const habitRow = document.getElementById(habitId);
            const statusBtn = habitRow.querySelector('.status-btn');
            habitRow.classList.add('completed');
            statusBtn.textContent = '✅ Done!';
        }
    });
}

// Optional: Save state to localStorage
function saveHabitState(habitId, isCompleted) {
    if (isCompleted) {
        localStorage.setItem(habitId, 'completed');
    } else {
        localStorage.removeItem(habitId);
    }
}

// Enhanced toggle with localStorage support
function toggleHabit(habitId) {
    const habitRow = document.getElementById(habitId);
    const statusBtn = habitRow.querySelector('.status-btn');
    
    // Toggle the completed class
    habitRow.classList.toggle('completed');
    
    // Update button text based on state
    const isCompleted = habitRow.classList.contains('completed');
    
    if (isCompleted) {
        statusBtn.textContent = '✅ Done!';
    } else {
        statusBtn.textContent = 'Not Done';
    }
    
    // Save state
    saveHabitState(habitId, isCompleted);
}

// Load saved habits when page loads
document.addEventListener('DOMContentLoaded', loadHabitState);
