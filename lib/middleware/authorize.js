module.exports = async (req, res, next) => {
    // Check req.user to ensure the user's email is 'admin'
    try {
        if (req.user?.email !== 'admin') {
            throw new Error('You do not have access to view this page');
        }

        next();
    } catch (error) {
        error.status = 403;
        next(error);
    }
};
