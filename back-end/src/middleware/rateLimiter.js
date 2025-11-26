import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(userid);

    if (!success) {
      return res.status(429).json({
        message: "Estamos com muitas requisições, por favor tente mais tarde",
      });
    }

    next();
  } catch (error) {
    console.log("erro de limite de taxa", error);
    next(error);
  }
};

export default rateLimiter;
