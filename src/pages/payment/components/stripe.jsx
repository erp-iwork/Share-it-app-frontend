const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_51GyDMVIubp2SJpRJWKvi2AQbuBZ5k8fVHi9Qp7yQ95THwq1OaQ9mmxBmrhFyE9ipaK1acfPNdWj8G9STHRXCu5zh00mRoDIAhE'
  : 'pk_test_51GyDMVIubp2SJpRJWKvi2AQbuBZ5k8fVHi9Qp7yQ95THwq1OaQ9mmxBmrhFyE9ipaK1acfPNdWj8G9STHRXCu5zh00mRoDIAhE';
 
export default STRIPE_PUBLISHABLE;