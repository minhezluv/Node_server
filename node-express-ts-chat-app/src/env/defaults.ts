// default config

const config: any = {
    port: process.env.PORT || 3000,
    env: 'development',
    database: {
        client: 'mongodb'
    }
};

// Đặt môi trường hiện tại hoặc mặc định thành 'phát triển'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
config.env = process.env.NODE_ENV;

export default config;
