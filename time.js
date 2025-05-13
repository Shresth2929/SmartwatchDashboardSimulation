async function updateTime() {
    let accessToken = localStorage.getItem("google_fit_token");
    if (!accessToken) return;

    try {
        const response = await fetch("https://www.googleapis.com/fitness/v1/users/me/sessions", {
            headers: { "Authorization": `Bearer ${accessToken}` }
        });

        if (!response.ok) throw new Error("Error fetching time from Google Fit");

        const data = await response.json();
        const lastSession = data.session[data.session.length - 1];

        if (lastSession) {
            const timeString = new Date(lastSession.startTimeMillis).toLocaleTimeString();
            document.getElementById("currentTime").innerText = `Time: ${timeString}`;
        }
    } catch (error) {
        console.error("❌ Error fetching watch time:", error);
    }
}

window.onload = function () {
    updateTime();
    setInterval(updateTime, 10000); // Update every 10 seconds
};

