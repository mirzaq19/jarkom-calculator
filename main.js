const BROADCAST_BUTTON = document.getElementById("hitungbroadcast");

const invertNumber = (num) => {
  return 255 - num;
};

const broadcastAddress = (ip, netmask) => {
  let result = [];
  for (let i = 0; i < 4; i++) {
    result.push(ip[i] | invertNumber(netmask[i]));
  }
  return result.join(".");
};

const broadcastCalc = () => {
  const ip = [];
  const netmask = [];

  ip.push(parseInt(document.getElementById("broadcastip1").value));
  ip.push(parseInt(document.getElementById("broadcastip2").value));
  ip.push(parseInt(document.getElementById("broadcastip3").value));
  ip.push(parseInt(document.getElementById("broadcastip4").value));

  netmask.push(parseInt(document.getElementById("broadcastsubnet1").value));
  netmask.push(parseInt(document.getElementById("broadcastsubnet2").value));
  netmask.push(parseInt(document.getElementById("broadcastsubnet3").value));
  netmask.push(parseInt(document.getElementById("broadcastsubnet4").value));

  //   console.log(ip, netmask);
  // console.log(ip[0] + ip[1] + ip[2] + ip[3]);
  document.getElementById("broadcastresult").innerHTML = broadcastAddress(
    ip,
    netmask
  );
};

BROADCAST_BUTTON.addEventListener("click", () => {
  broadcastCalc();
});
