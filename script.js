'use strict';
		const secondHand = document.querySelector(".second-hand");
		const minuteHand = document.querySelector(".min-hand");
		const hourHand = document.querySelector(".hour-hand");

		function setDate() {
			const now = new Date();

			const seconds = now.getSeconds();
			const secondsDegree = (seconds / 60) * 360;
			secondHand.style.transform = `rotate(${secondsDegree}deg)`;
			if (seconds === 0 || !minuteHand.style.transform) { /*do these at start of clock or every minute*/
				const minutes = now.getMinutes();
				const minutesDegree = (minutes / 60) * 360;
				minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
				if (minutes === 0) {
					const hour = now.getHours();
					const hoursDegree = (hour / 12) * 360;
					hourHand.style.transform = `rotate(${hoursDegree}deg)`;
				}
			}

		}
		setInterval(setDate, 1000);
