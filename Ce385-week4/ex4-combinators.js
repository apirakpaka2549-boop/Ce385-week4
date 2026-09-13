const EventEmitter = require('events');

class DataProcessor extends EventEmitter {
    processData(data) {
        console.log('กำลังประมวลผลข้อมูล...');

        setTimeout(() => {
            if (!data) {
                // ส่ง event 'error' เมื่อไม่มีข้อมูล
                this.emit('error', new Error('ไม่มีข้อมูลส่งมาประมวลผล'));
                return;
            }

            const result = `ประมวลผลเรียบร้อย: ${data.toUpperCase()}`;
            // ส่ง event 'done' พร้อมแนบผลลัพธ์
            this.emit('done', result);
        }, 1000);
    }
}

// การทดสอบใช้งาน
const processor = new DataProcessor();

// ดักจับ Event 'done'
processor.on('done', (result) => {
    console.log(' [Event Done]:', result);
});

// ดักจับ Event 'error'
processor.on('error', (err) => {
    console.error(' [Event Error]:', err.message);
});

// สั่งทำงาน
processor.processData('hello node.js');