let isConnected = false;

export const ConnectDB = async () => {
  if (isConnected) return;
  const mongoose = await import('mongoose');

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('DB Connected');
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
