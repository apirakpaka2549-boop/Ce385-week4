const fs = require('fs');

function readFileWithCallback(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            // ส่ง error เป็น argument ตัวแรก
            return callback(err);
        }
        // ถ้าไม่มี error ส่ง null เป็น argument ตัวแรก และส่งข้อมูลใน argument ตัวที่สอง
        callback(null, data);
    });
}

// การทดสอบใช้งาน
readFileWithCallback('test.txt', (err, data) => {
    if (err) {
        console.error('เกิดข้อผิดพลาดในการอ่านไฟล์:', err.message);
        return;
    }
    console.log('เนื้อหาในไฟล์:', data);
});