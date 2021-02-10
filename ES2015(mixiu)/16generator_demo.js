const data = [
  {
    name: '米斯特吴',
    age: 30,
    gender: '男',
    lookingfor: '女',
    location: '北京',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: '吴先生',
    age: 32,
    gender: '男',
    lookingfor: '女',
    location: '上海',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name: '李女士',
    age: 24,
    gender: '女',
    lookingfor: '男',
    location: '北京',
    image: 'https://randomuser.me/api/portraits/women/83.jpg'
  }
];
//迭代器
// function profileIterrator(profiles) {
//   let nextIndex = 0;
//   return {
//     next: function () {
//       return nextIndex < profiles.length ?
//         { value: profiles[nextIndex++], done: false } :
//         { value: "undefined", done: true }
//     }
//   }
// }

//生成器
function* profileIterrator() {
  yield data[0];
  yield data[1];
  yield data[2];
}
const profiles = profileIterrator(data);
console.log(profiles.next());
//手动调用
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="lsit-group-item">姓名：${currentProfile.name}</li>
      <li class="lsit-group-item">年龄：${currentProfile.age}</li>
      <li class="lsit-group-item">位置：${currentProfile.location}</li>
      <li class="lsit-group-item">诉求：${currentProfile.gender}</li>
    </ul>`;
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}"/>
    `;
  } else {
    window.location.reload();
  }

}