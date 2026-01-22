# Simple Habit Tracker

A beautiful and interactive daily habit tracker to help you build better habits, one day at a time.

![Habit Tracker Demo](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Features

- **Three Daily Habits**: Track "Drink Water," "Exercise," and "Read 10 Pages"
- **Toggle Functionality**: Click to mark habits as done/not done
- **Visual Feedback**: Green background when completed with smooth animations
- **Persistent Storage**: Habits save automatically using localStorage
- **Modern Design**: Beautiful gradient UI with glassmorphism effects
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Engaging micro-interactions and hover effects

## Quick Start

1. Clone this repository:

   ```bash
   git clone https://github.com/JuLiusGI/habit-tracker.git
   ```

2. Open `index.html` in your web browser

3. Start tracking your daily habits!

## 💻 Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with gradients, animations, and flexbox
- **Vanilla JavaScript**: Toggle functionality and localStorage
- **Google Fonts**: Inter font family for clean typography

## Screenshots

### Initial State

All habits ready to be tracked with "Not Done" status.

### Completed Habits

Click any button to toggle to "✅ Done!" with a satisfying green background.

## Design Highlights

- **Premium Aesthetics**: Vibrant purple gradient background
- **Glassmorphism**: Semi-transparent card with backdrop blur
- **Smooth Transitions**: All interactions include CSS animations
- **Accessibility**: Clear visual states and semantic HTML
- **Mobile-First**: Responsive design that works on all screen sizes

## How It Works

1. **Click** a "Not Done" button to mark the habit as complete
2. The row turns **green** and displays "✅ Done!"
3. **Click again** to toggle back to "Not Done"
4. Your progress **automatically saves** in the browser

## Customization

Want to add your own habits? Edit the HTML in `index.html`:

```html
<div class="habit-row" id="habit-1">
  <div class="habit-info">
    <span class="habit-icon">🎯</span>
    <span class="habit-name">Your Custom Habit</span>
  </div>
  <button class="status-btn" onclick="toggleHabit('habit-1')">Not Done</button>
</div>
```

## Future Enhancements

- Add custom habit creation
- Weekly/monthly progress tracking
- Streak counter
- Dark mode toggle
- Export progress data

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Julius Pelegrino**

- GitHub: [@JuLiusGI](https://github.com/JuLiusGI)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

⭐ Star this repo if you find it helpful!
