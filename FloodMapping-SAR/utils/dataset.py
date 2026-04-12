import os

import cv2
import torch
from torch.utils.data import Dataset


class FloodDataset(Dataset):
    def __init__(self, img_dir, mask_dir):
        self.imgs = os.listdir(img_dir)
        self.img_dir = img_dir
        self.mask_dir = mask_dir

    def __len__(self):
        return len(self.imgs)

    def __getitem__(self, idx):
        name = self.imgs[idx]

        img = cv2.imread(os.path.join(self.img_dir, name), 0)
        mask = cv2.imread(os.path.join(self.mask_dir, name), 0)

        img = cv2.resize(img, (256, 256)) / 255.0
        mask = cv2.resize(mask, (256, 256)) / 255.0

        img = torch.tensor(img).unsqueeze(0).float()
        mask = torch.tensor(mask).unsqueeze(0).float()

        return img, mask
