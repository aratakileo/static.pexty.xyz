var getplatformtype = (platformName) => {
    var returnedPlatformType = platformName;

    switch (platformName.toLowerCase()) {
        case "android":
        case "ios":
        case "harmonyos":
        case "miui":
        case "oneui":
        case "emui":
        case "aurora":
            returnedPlatformType = "Mobile";
            break;
        case "windows":
        case "macos":
        case "linux":
            returnedPlatformType = "Desktop";
            break;
        case "chrome":
        case "yandex":
        case "edge":
        case "safari":
        case "opera":
        case "samsung browser":
        case "browser":
            returnedPlatformType = "Web";
            break;
    }

    return returnedPlatformType;
};
