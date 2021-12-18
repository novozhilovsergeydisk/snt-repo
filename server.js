const path = require('path');
const os = require('os');
const fs = require('fs');

const log = (data => {
	console.log(data);
});

console.log('test');
const file = './modules/log/get.log';
try {
  const fd = fs.openSync('./modules/log/get.log', 'r')
  //console.log(typeof fd);
} catch (err) {
  console.error(err)
}

// асинхронное чтение
fs.readFile(file, "utf8", 
            function(error,data){
//                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
//                console.log(data);  // выводим считанные данные
});
 
// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync(file, "utf8");
const arr = fileContent.split("\n");
//console.log(fileContent);
//console.log({ arr });
let newArr = [];
let str = '';
arr.forEach(item => {
	//log({ item });
	str = item.split(" ✧ ");
	if (item !== '') {
		newArr.push({ method: str[0], remote_addr: '--', date: str[3] });
//		console.log({ str });
	}
});
console.table(newArr);
//log(newArr);
