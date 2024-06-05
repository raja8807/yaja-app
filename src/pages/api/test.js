import Razorpay from "razorpay";

const handler = async (req, res) => {
  try {
    var instance = new Razorpay({
      key_id: "rzp_test_4TgznZSNrMLIcJ",
      key_secret: "mIz3Hvhd6AjkFZYh4ErVYzW2",
    });

    // const x = await instance.subscriptions.createRegistrationLink({
    //   amount: 500,
    //   currency: "INR",
    //   accept_partial: true,
    //   first_min_partial_amount: 100,
    // //   expire_by: Date.now() + 3600000,
    //   expire_by: 1715587515262,
    //   reference_id: "TS1989",
    //   description: "For XYZ purpose",
    //   customer: {
    //     name: "Gaurav Kumar",
    //     email: "gaurav.kumar@example.com",
    //     contact: "+917812804856",
    //   },
    //   notify: {
    //     sms: true,
    //     email: true,
    //   },
    //   reminder_enable: true,
    //   notes: {
    //     policy_name: "Jeevan Bima",
    //   },
    //   callback_url: "https://example-callback-url.com/",
    //   callback_method: "get",
    // });
   

    return res.status(200).json(x);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default handler;
