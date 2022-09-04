const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
<p align="center">
  <img width="511" height="400" src="https://github.com/emersondelemmus/emersondelemmus/blob/master/quotable_quote_stretch.png">
</p>

<p align="center">
<img src = "https://github.com/emersondelemmus/emersondelemmus/blob/master/hourglass-timer.gif" width="15"/> <b> Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(1)} % </b>
</p>
<p align="center">
⏰ Updated on ${new Date().toUTCString()}
</p>



<h1 align="center"> Hi there 👋, I'm Emerson</h1>

- 🔭 I’m currently working on **kaggle competitions**
- 🌱 I’m currently learning **optimisation with genetic algorithms**
- 👯 I’m looking to collaborate on **computer vision tasks**
- 🤔 I’m looking for help with **increasing FPS on large resolution inputs**
- 💬 Ask me about anything! My favorites are **computer vision, machine learning, VALORCAN'T and higher education.** 
- 📫 How to reach me: you can check out [**my linkedin**](https://www.linkedin.com/in/edelemmus/) to send me mail! 
- 😄 Pronouns: (he/him/his)
- ⚡ Fun fact: I was going to be an MD before switching to computer science. I didn't write code until I was a sophomore in college! 

## ✨ My Contributions:
- [X] [YOLO Image Tiling](https://github.com/emersondelemmus/yolo-tiling) : Added various improvements.

## :link: Links:

<p align="center">
  <a href="https://www.linkedin.com/in/edelemmus/"><img height="75" img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="linkedin"/></a>
  <a href="https://www.kaggle.com/emersondelemmus"><img height="80" img src="https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" alt="facebook"/></a>
  <a href="mailto:edelemmus@gmail.com"><img height="80" img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="email"/></a>
  <a href="https://open.spotify.com/user/12144018445"><img height="80" img src="https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg" alt="spotify"/></a>
  <a href="https://twitter.com/emersondelemmus"><img height="80" img src="https://www.vectorlogo.zone/logos/twitter/twitter-tile.svg" alt="twitter"/></a>
  <a href="https://www.instagram.com/emersondelemmus/"><img height="80" img src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" alt="instagram"/></a>
  <a href="https://medium.com/@edelemmus"><img height="80" img src="https://img.icons8.com/color/96/000000/medium-logo.png" alt="medium"/></a>
  <a href="https://stackoverflow.com/users/8859867/emerson-a-de-lemmus-ii"><img height="80" img src="https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-tile.svg" alt="stackoverflow"/></a>
  <a href="https://www.verseoftheday.com/"><img height="85" img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Bibletime-logo.svg" alt="medium"/></a>
</p>


<br>

<h2 align="left" id="emerson-tech">🛠️Favorite Tech</h2>

> Tools, languages, and other things that I like to work with.

<table>
  <tr>
    <td align="center" width="96">
      <a href="https://pytorch.org/">
        <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" width="48" height="48" alt="PyTorch" />
      </a>
      <br>PyTorch
    </td>
    <td align="center" width="96">
      <a href="https://www.tensorflow.org/">
        <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" width="48" height="48" alt="TensorFlow" />
      </a>
      <br>TensorFlow
    </td>
    <td align="center" width="96">
      <a href="https://numpy.org/">
        <img src="https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg" width="48" height="48" alt="NumPy" />
      </a>
      <br>NumPy
    </td>
    <td align="center" width="96">
      <a href="https://pandas.pydata.org/">
        <img src="https://github.com/devicons/devicon/blob/master/icons/pandas/pandas-original.svg" width="48" height="48" alt="Pandas" />
      </a>
      <br>Pandas
    </td>
    <td align="center" width="96">
      <a href="https://opencv.org/">
        <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" width="48" height="48" alt="OpenCV" />
      </a>
      <br>OpenCV
    </td>
    <td align="center" width="96">
      <a href="https://pjreddie.com/darknet/yolo/">
        <img src="https://github.com/simple-icons/simple-icons/blob/master/icons/yolo.svg" width="48" height="48" alt="YOLO" />
      </a>
      <br>YOLO
    </td>
    <td align="center" width="96">
      <a href="https://console.cloud.google.com/marketplace/details/click-to-deploy-images/deeplearning?pli=1" >
        <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" width="48" height="48" alt="GCP" />
      </a>
      <br>GCP
    </td>
    <td align="center" width="96">
      <a href="https://roboflow.com/">
        <img src="https://pbs.twimg.com/profile_images/1426271234145325062/xIWWM_a-_400x400.jpg" width="48" height="48" alt="Roboflow" />
      </a>
      <br>Roboflow
    </td>
    <td align="center" width="96">
      <a href="#emerson-tech">
        <img src="./img/sass-original.svg" width="48" height="48" alt="Sass" />
      </a>
      <br>Sass
    </td>
  </tr>
  <tr>
    <td align="center" width="96"> 
      <a href="#emerson-tech" >
        <img src="./img/docker-original.svg" width="48" height="48" alt="Docker" />
      </a>
      <br>Docker
    </td>
    <td align="center" width="96">
      <a href="#emerson-tech" >
        <img src="https://raw.githubusercontent.com/cncf/artwork/master/projects/kubernetes/icon/color/kubernetes-icon-color.svg" width="48" height="48" alt="Kubernetes" />
      </a>
      <br>Kubernetes
    </td>
    <td align="center"  width="96">
      <a href="#emerson-tech">
        <img src="./img/debian-original.svg" width="48" height="48" alt="Debian" />
      </a>
      <br>Debian
    </td>
    <td align="center"  width="96">
      <a href="#emerson-tech">
        <img src="./img/redhat-original.svg" width="48" height="48" alt="RHEL" />
      </a>
      <br>RHEL
    </td>
    <td align="center" width="96">
      <a href="#emerson-tech">
        <img src="https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/ps_black_128.svg" width="48" height="48" alt="Powershell" />
      </a>
      <br>Powershell
    </td>
    <td align="center"  width="96">
      <a href="#emerson-tech">
        <img src="./img/mysql-original.svg" width="48" height="48" alt="MySQL" />
      </a>
      <br>MySQL
    </td>
    <td align="center" width="96">
      <a href="#emerson-tech" >
        <img src="https://raw.githubusercontent.com/grafana/grafana/master/public/img/grafana_icon.svg" width="48" height="48" alt="Grafana" />
      </a>
      <br>Grafana
    </td>
    <td align="center" width="96">
      <a href="#emerson-tech" >
        <img src="https://github.com/cncf/artwork/blob/master/projects/prometheus/icon/color/prometheus-icon-color.svg" width="48" height="48" alt="Prometheus" />
      </a>
      <br>Prometheus
    </td>
    <td align="center" width="96">
      <a href="#emerson-tech" >
        <img src="https://raw.githubusercontent.com/cncf/artwork/master/projects/thanos/icon/color/thanos-icon-color.svg" width="48" height="48" alt="Thanos" />
      </a>
      <br>Thanos
    </td>
  </tr>
</table>






## 🛠️ Tools:

<code><a href="https://pytorch.org/"><img height="65" src="https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg"></a></code>
<code><a href="https://www.tensorflow.org/"><img height="70" src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg"></a></code>
<code><a href="https://numpy.org/"><img height="65" src="https://www.vectorlogo.zone/logos/numpy/numpy-ar21.svg"></a></code>
<code><a href="https://pandas.pydata.org/"><img height="55" src="https://github.com/valohai/ml-logos/blob/master/pandas.svg"></a></code>
<code><a href="https://ubuntu.com/"><img height="55" src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg"></a></code>
<!--<code><a href="" target="_blank"><img height="55" src="https://www.vectorlogo.zone/logos/kaggle/kaggle-ar21.svg"></a></code>-->
<!--<code><a href="" target="_blank"><img height="70" src="https://www.vectorlogo.zone/logos/jetbrains/jetbrains-ar21.svg"></a></code>-->


[![emkun's github stats](https://github-readme-stats.vercel.app/api/top-langs/?username=emersondelemmus&hide=html,css)](https://github.com/anuraghazra/github-readme-stats)
[![Top Langs](https://github-readme-stats.vercel.app/api?username=emersondelemmus&show_icons=true&count_private=true&line_height=40)](https://github.com/anuraghazra/github-readme-stats)\
`

console.log(readme)
