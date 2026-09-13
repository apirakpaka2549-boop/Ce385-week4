const fs = require('fs');

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                // ถ้าเกิด Error ให้เรียก reject
                return reject(err);
            }
            // ถ้าสำเร็จ ให้เรียก resolve
            resolve(data);
        });
    });
}

// การทดสอบใช้งานด้วย .then() และ .catch()
readFilePromise('test.txt')
    .then((data) => {
        console.log('อ่านไฟล์สำเร็จ:', data);
    })
    .catch((err) => {
        console.error('เกิดข้อผิดพลาด:', err.message);
    });