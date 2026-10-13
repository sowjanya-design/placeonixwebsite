const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function inspectVps() {
  try {
    await ssh.connect({
      host: '187.127.179.44',
      username: 'root',
      password: 'ckDhB;CM@#r+j17b'
    });
    console.log('Connected!');

    const res1 = await ssh.execCommand('pm2 list');
    console.log('PM2 List:\n', res1.stdout);

    const res2 = await ssh.execCommand('find /home -name ".git" -type d -maxdepth 6 2>/dev/null');
    console.log('Git repos on server:\n', res2.stdout);

    ssh.dispose();
  } catch (err) {
    console.error('Error:', err);
  }
}

inspectVps();
