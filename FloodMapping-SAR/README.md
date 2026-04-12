# 🌊 Flood Mapping using SAR (U-Net)

## 📌 Overview
This project detects flooded areas using SAR satellite imagery and deep learning.

## 🧠 Model
- U-Net (CNN-based segmentation)

## 📂 Dataset
- Sen1Floods11

## ⚙️ Setup
```bash
pip install -r requirements.txt
```

## 🚀 Train
```bash
python train.py
```

## 🧪 Test
```bash
python test.py
```

## 📊 Metrics
- Dice Score
- IoU

## 📸 Output
Shows predicted flood masks vs ground truth.

## 🚀 How to Use

### 1. Clone repo
```bash
git clone <your-repo-link>
cd FloodMapping-SAR
```

### 2. Add dataset
```text
data/images/
data/masks/
```

### 3. Run
```bash
python train.py
python test.py
```

## 🎯 MSc-Level Additions (Do This Before Submission)
Upgrade your repo by adding:
- Dice Loss
- Attention U-Net
- Results folder with images
- Graphs (loss curve)

## 🏁 Final Result
You now have:
- ✅ Clean GitHub project
- ✅ Modular code
- ✅ Research-ready structure
- ✅ Ready for MSc submission
