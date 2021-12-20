(() => {
  const socket = io("https://draw.hack.af");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  function relativePointToAbsolute(point) {
    return [point[0] * canvas.width, point[1] * canvas.height];
  }

  function absolutePointToRelative(point) {
    return [point[0] / canvas.width, point[1] / canvas.height];
  }

  socket.on("init", (lines) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lines.forEach(({ color, point: [[prevX, prevY], [x, y]] }) => {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(...relativePointToAbsolute([prevX, prevY]));
      ctx.lineTo(...relativePointToAbsolute([x, y]));
      ctx.stroke();
    });
  });

  socket.on("draw", ({ color, point: [[prevX, prevY], [x, y]] }) => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(...relativePointToAbsolute([prevX, prevY]));
    ctx.lineTo(...relativePointToAbsolute([x, y]));
    ctx.stroke();
  });
})();
