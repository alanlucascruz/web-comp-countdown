const output = document.querySelector("h1");

const countDown = () => {
  const input = document.querySelector("input");

  const countDownDate = new Date(input.value).getTime();
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const dd = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const ss = Math.floor((distance % (1000 * 60)) / 1000);

  output.innerText = `${dd}d ${hh}h ${mm}m ${ss}s`;

  if (distance < 0) {
    output.innerText = "EXPIRADO";
  }
};

countDown();
setInterval(countDown, 1000);
