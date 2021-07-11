import config from './defaults';

// Tải các cài đặt dành riêng cho môi trường
let localConfig: any = {};

try {
    // Tệp môi trường có thể không tồn tại
    localConfig = require(`../env/${config.env}`);
    localConfig = localConfig || {};
} catch (error) {
    localConfig = {};
    console.error('error', error);
}

// hợp nhất các tệp cấu hình
// localConfig sẽ ghi đè các giá trị mặc định
export default (< any > Object).assign({}, config, localConfig);
