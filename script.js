document.getElementById("calcBtn").addEventListener("click", function () {
  const input = document.getElementById("timeInput").value;
  const total = parseFloat(input);

  const resultDiv = document.getElementById("result");

  // 简单校验
  if (isNaN(total) || total <= 0) {
    resultDiv.textContent = "请输入有效的数字，例如 52.5";
    return;
  }

  // 平均每100米
  const avg = total / 4;

  // 分段规则（先简单版，你之后可以自己改）
  const p1 = avg - 0.5;
  const p2 = avg - 0.7;
  const p3 = avg + 0.3;
  const p4 = total - p1 - p2 - p3;

  const first200 = p1 + p2;
  const second200 = p3 + p4;

  resultDiv.textContent =
    `目标成绩：${total.toFixed(2)} 秒\n` +
    `第1个100米：${p1.toFixed(2)} 秒\n` +
    `第2个100米：${p2.toFixed(2)} 秒\n` +
    `第3个100米：${p3.toFixed(2)} 秒\n` +
    `第4个100米：${p4.toFixed(2)} 秒\n` +
    `前200米：${first200.toFixed(2)} 秒\n` +
    `后200米：${second200.toFixed(2)} 秒`;
});
