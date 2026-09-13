const fs = require('fs').promises;

async function readMultipleFiles(fileList) {
    try {
        const results = [];

        // อ่านไฟล์ทีละไฟล์ตามลำดับ
        for (const file of fileList) {
            const content = await fs.readFile(file, 'utf8');
            results.push(content);
        }

        return results;
    } catch (error) {
        console.error('พบข้อผิดพลาดในการอ่านไฟล์:', error.message);
        throw error;
    }
}

// การทดสอบใช้งาน
async function main() {
    const files = ['file1.txt', 'file2.txt', 'file3.txt'];
    try {
        const contents = await readMultipleFiles(files);
        console.log('ข้อมูลจากไฟล์ทั้งหมด:', contents);
    } catch (err) {
        console.log('การทำงานล้มเหลว');
    }
}

main();