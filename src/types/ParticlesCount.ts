export const getParticleCount = (): number[] => {
    const screenWidth = window.innerWidth;

    // Return the number of particles based on screen width
    if (screenWidth > 1000) {
        return [150, 3]; // For screens wider than 1000px
    } else {
        return [25, 0.5]; // For screens narrower than 1000px
    }
};
