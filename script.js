body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #6bcf6b, #3aa655);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: white;
}

.slide {
  display: none;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 90%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.slide.active {
  display: flex;
  opacity: 1;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #ff69b4;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #ff1493;
  transform: scale(1.05);
}
